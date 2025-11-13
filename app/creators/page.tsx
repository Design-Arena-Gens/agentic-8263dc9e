import { creators } from '@/lib/data';
import { CreatorList } from '@/components/CreatorList';

export const dynamic = 'force-static';

export default function CreatorsPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Find creators</h1>
      <CreatorList creators={creators} />
    </div>
  );
}
