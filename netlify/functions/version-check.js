export const handler = async (event, context) => {
    const latestVer = "1.0.0.1"
    const body = JSON.parse(event.body)
    const currVer = body.version
    const updatedRequired = !(latestVer == currVer)
    console.log("[Version Check] Request received, responded with: " + updatedRequired)
    return {
        statusCode: 200,
        body: JSON.stringify({
            updateRequired: updatedRequired,
        }),
    }
}