export const handler = async (event, context) => {
    const body = JSON.parse(event.body)
    console.log("[Mission Outcome] Request received");

    var Mixpanel = require('mixpanel');
    var mixpanel = Mixpanel.init('62cdb58f3aa78610853e39b74ba7c8a2');

    console.log("[Mission Outcome] Connected");

    mixpanel.track('MissionOutcome', {
        distinct_id: body.userId,
        difficulty: body.difficulty,
        version: body.version,
        dynamic_world: body.dynamicWorld,
        persist_difficulty: body.persistDifficulty,
        mission: body.mission,
        session_id: body.sessionId,
        success: body.success,
        reason: body.reason,
    });

    console.log("[Mission Outcome] Sent event");

    return {
        statusCode: 200,
        body: JSON.stringify({}),
        headers: {
            'Content-Type': 'application/json',
        },
    }
}