import { redirect } from 'next/navigation';

export function GET() {
  redirect('/?utm_source=businesscard&utm_medium=print&utm_campaign=launch');
}
