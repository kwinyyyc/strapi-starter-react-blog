"use strict";

/**
 * Cron config that gives you an opportunity
 * to run scheduled jobs.
 *
 * The cron format consists of:
 * [MINUTE] [HOUR] [DAY OF MONTH] [MONTH OF YEAR] [DAY OF WEEK] [YEAR (optional)]
 *
 * See more details here: https://strapi.io/documentation/3.0.0-beta.x/concepts/configurations.html#cron-tasks
 */

module.exports = {
  "*/1 * * * *": async () => {
    // fetch articles to publish
    const draftArticleToPublish = await strapi.api.article.services.article.find(
      {
        status: "draft",
        publish_at_lt: new Date(),
      }
    );

    // update status of articles
    draftArticleToPublish.forEach(async (article) => {
      await strapi.api.article.services.article.update(
        { id: article.id },
        { status: "published" }
      );
    });
  },
};
