import { PostHog } from 'posthog-node'

export const handler = async (event, context) => {
    const body = JSON.parse(event.body)
    console.log("[Plugin Loaded] Request received")

    const client = new PostHog(
        'phc_Ae20eH6ZukSpndSBBaxx6odHM5HDZYmguBRXA0Fo5da',
        {
            host: 'https://app.posthog.com',
            flushAt: 1,
            flushInterval: 0,
        }
    )

    console.log("[Plugin Loaded] Connected")

    client.capture({
        distinctId: body.userId,
        event: 'PluginLoaded',
        properties: {
            difficulty: body.difficulty,
            version: body.version,
            dynamicWorld: body.dynamicWorld,
            persistDifficulty: body.persistDifficulty,
        },
    })

    console.log("[Plugin Loaded] Sent event")

    client.shutdown();

    return {
        statusCode: 200,
        body: JSON.stringify({}),
        headers: {
            'Content-Type': 'application/json',
        },
    }
}