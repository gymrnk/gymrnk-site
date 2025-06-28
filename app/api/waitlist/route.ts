import { NextRequest, NextResponse } from 'next/server'
import { client } from '@/sanity/lib/client'

export async function POST(request: NextRequest) {
  try {
    const { firstName, email, source = 'popup-timer' } = await request.json()

    // Validate input
    if (!firstName || !email) {
      return NextResponse.json(
        { error: 'First name and email are required' },
        { status: 400 }
      )
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      )
    }

    // Check if email already exists in waitlist
    const existingSignup = await client.fetch(
      `*[_type == "waitlist" && email == $email][0]`,
      { email }
    )

    if (existingSignup) {
      return NextResponse.json(
        { error: 'This email is already on the waitlist!' },
        { status: 400 }
      )
    }

    // Save to Sanity
    const result = await client.create({
      _type: 'waitlist',
      firstName,
      email,
      signupDate: new Date().toISOString(),
      source,
    })

    console.log('New waitlist signup saved:', result._id)

    return NextResponse.json(
      { 
        success: true, 
        message: 'Successfully joined the waitlist!',
        id: result._id 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Waitlist submission error:', error)
    return NextResponse.json(
      { error: 'Failed to join waitlist. Please try again.' },
      { status: 500 }
    )
  }
}