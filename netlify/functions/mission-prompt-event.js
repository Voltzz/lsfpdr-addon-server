export const handler = async (event, context) => {
    const body = JSON.parse(event.body)
    console.log("[Mission Prompt] Request received")

    var Mixpanel = require('mixpanel');
    var mixpanel = Mixpanel.init('62cdb58f3aa78610853e39b74ba7c8a2');

    console.log("[Mission Prompt] Connected")

    mixpanel.track('MissionPrompt', {
        distinct_id: body.userId,
        difficulty: body.difficulty,
        version: body.version,
        dynamic_world: body.dynamicWorld,
        persist_difficulty: body.persistDifficulty,
        mission: body.mission,
        session_id: body.sessionId,
    })

    console.log("[Mission Prompt] Sent event")

    return {
        statusCode: 200,
        body: JSON.stringify({}),
        headers: {
            'Content-Type': 'application/json',
        },
    }
}