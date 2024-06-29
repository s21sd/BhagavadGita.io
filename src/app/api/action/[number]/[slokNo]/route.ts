import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest, { params }: { params: { number: string, slokNo: string } }) {
    const { number, slokNo } = params;
    console.log(number, slokNo);

    try {
        const response = await fetch(`https://bhagavadgitaapi.in/slok/${number}/${slokNo}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();

        return NextResponse.json(data);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
    }
}
