// Contact form API — SSR Route Handler
// Validates form data with Zod and returns JSON.
// Future: add email provider (Resend, SendGrid, Nodemailer) here.
import { z } from 'zod'

const schema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  message: z.string().min(10).max(2000),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const result = schema.safeParse(body)

    if (!result.success) {
      return Response.json(
        { success: false, errors: result.error.flatten().fieldErrors },
        { status: 400 }
      )
    }

    // TODO: Send email via Resend/SendGrid/Nodemailer
    // const { name, email, message } = result.data
    // await sendEmail({ to: 'hello@mmb.dev', from: email, subject: `New inquiry from ${name}`, body: message })

    return Response.json({ success: true })
  } catch {
    return Response.json({ success: false, error: 'Invalid request' }, { status: 400 })
  }
}
