export const handler = async (event, context) => {
    const body = JSON.parse(event.body)
    console.log("[Plugin Loaded] Request received")

    const mixpanel = require('../helper/mixpanel-wrapper.js');

    await mixpanel.track('PluginLoaded', {
        distinct_id: body.userId,
        difficulty: body.difficulty,
        version: body.version,
        dynamic_world: body.dynamicWorld,
        persist_difficulty: body.persistDifficulty,
    })

    console.log("[Plugin Loaded] Sent event")

    return {
        statusCode: 200,
        body: JSON.stringify({}),
        headers: {
            'Content-Type': 'application/json',
        },
    }
}