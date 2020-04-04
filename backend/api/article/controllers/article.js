const { parseMultipartData, sanitizeEntity } = require("strapi-utils");

module.exports = {
  async find(ctx) {
    let entities;

    ctx.query = {
      ...ctx.query,
      status: "published",
    };

    if (ctx.query._q) {
      entities = await strapi.services.article.search(ctx.query);
    } else {
      entities = await strapi.services.article.find(ctx.query);
    }

    return entities.map((entity) =>
      sanitizeEntity(entity, { model: strapi.models.article })
    );
  },

  /**
   * Create a record.
   *
   * @return {Object}
   */

  async create(ctx) {
    let entity;
    if (ctx.is("multipart")) {
      const { data, files } = parseMultipartData(ctx);
      data.author = ctx.state.user.id;
      entity = await strapi.services.article.create(data, { files });
    } else {
      ctx.request.body.author = ctx.state.user.id;
      entity = await strapi.services.article.create(ctx.request.body);
    }
    return sanitizeEntity(entity, { model: strapi.models.article });
  },

  /**
   * Update a record.
   *
   * @return {Object}
   */

  async update(ctx) {
    let entity;

    const [article] = await strapi.services.article.find({
      id: ctx.params.id,
      "author.id": ctx.state.user.id,
    });

    if (!article) {
      return ctx.unauthorized(`You can't update this entry`);
    }

    if (ctx.is("multipart")) {
      const { data, files } = parseMultipartData(ctx);
      entity = await strapi.services.article.update(ctx.params, data, {
        files,
      });
    } else {
      entity = await strapi.services.article.update(
        ctx.params,
        ctx.request.body
      );
    }

    return sanitizeEntity(entity, { model: strapi.models.article });
  },
};
