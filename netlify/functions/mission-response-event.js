import { PostHog } from 'posthog-node'

export const handler = async (event, context) => {
    const body = JSON.parse(event.body)
    console.log("[Mission Response] Request received")

    const client = new PostHog(
        'phc_Ae20eH6ZukSpndSBBaxx6odHM5HDZYmguBRXA0Fo5da',
        {
            host: 'https://app.posthog.com',
            flushAt: 1,
            flushInterval: 0,
        }
    )

    console.log("[Mission Response] Connected")

    client.capture({
        distinctId: body.userId,
        event: 'MissionResponse',
        properties: {
            difficulty: body.difficulty,
            version: body.version,
            dynamicWorld: body.dynamicWorld,
            persistDifficulty: body.persistDifficulty,
            mission: body.mission,
            sessionId: body.sessionId,
            accepted: body.accepted,
        },
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