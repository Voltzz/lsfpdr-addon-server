import { PostHog } from 'posthog-node'

export const handler = async (event, context) => {
    const body = JSON.parse(event.body)
    console.log("[Mission Outcome] Request received")

    const client = new PostHog(
        'phc_Ae20eH6ZukSpndSBBaxx6odHM5HDZYmguBRXA0Fo5da',
        {
            host: 'https://app.posthog.com',
            flushAt: 1,
            flushInterval: 0,
        }
    )

    console.log("[Mission Outcome] Connected")

    client.capture({
        distinctId: body.userId,
        event: 'MissionOutcome',
        properties: {
            difficulty: body.difficulty,
            version: body.version,
            dynamicWorld: body.dynamicWorld,
            persistDifficulty: body.persistDifficulty,
            mission: body.mission,
            sessionId: body.sessionId,
            success: body.success,
        },
    })

    console.log("[Mission Outcome] Sent event")

    return {
        statusCode: 200,
        body: JSON.stringify({}),
        headers: {
            'Content-Type': 'application/json',
        },
    }
}