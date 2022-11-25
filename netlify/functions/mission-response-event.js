export const handler = async (event, context) => {
    const body = JSON.parse(event.body)
    console.log("[Mission Response] Request received")

    const mixpanel = require('../helper/mixpanel-wrapper.js');

    await mixpanel.track('MissionResponse', {
        distinct_id: body.userId,
        difficulty: body.difficulty,
        version: body.version,
        dynamic_world: body.dynamicWorld,
        persist_difficulty: body.persistDifficulty,
        mission: body.mission,
        session_id: body.sessionId,
        accepted: body.accepted,
    })

    console.log("[Mission Response] Sent event")

    return {
        statusCode: 200,
        body: JSON.stringify({}),
        headers: {
            'Content-Type': 'application/json',
        },
    }
}