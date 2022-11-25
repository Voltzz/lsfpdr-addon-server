import { PostHog } from 'posthog-node'

export const handler = async (event, context) => {
    const body = JSON.parse(event.body)
    console.log("[Mission Detail] Request received")

    const client = new PostHog(
        'phc_Ae20eH6ZukSpndSBBaxx6odHM5HDZYmguBRXA0Fo5da',
        {
            host: 'https://app.posthog.com',
            flushAt: 1,
            flushInterval: 0,
        }
    )

    console.log("[Mission Detail] Connected")

    client.capture({
        distinctId: body.userId,
        event: 'MissionDetail',
        properties: {
            difficulty: body.difficulty,
            version: body.version,
            dynamicWorld: body.dynamicWorld,
            persistDifficulty: body.persistDifficulty,
            mission: body.mission,
            sessionId: body.sessionId,
            type: body.type,
            details: body.details,
            context: body.context,
            param1: body.param1,
            param2: body.param2,
        },
    })

    console.log("[Mission Detail] Sent event")

    client.shutdown()

    return {
        statusCode: 200,
        body: JSON.stringify({}),
        headers: {
            'Content-Type': 'application/json',
        },
    }
}