export const handler = async (event, context) => {
    const body = JSON.parse(event.body)
    console.log("[Plugin Loaded] Request received")

    var Mixpanel = require('mixpanel');
    var mixpanel = Mixpanel.init('62cdb58f3aa78610853e39b74ba7c8a2');

    console.log("[Plugin Loaded] Connected")

    mixpanel.track('PluginLoaded', {
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