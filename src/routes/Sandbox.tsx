import {useEffect, useState} from 'react';
import '../App.css';
import {apiService} from "@/services/api.ts";
import {Button} from "@/components/ui/button";
import {useQuery} from "@tanstack/react-query";

interface IPost {
    id: number;
    title: string;
    body: string;
}

export default function Sandbox() {
    const [state, setState] = useState<number | null>(null);

    const { data: posts, isLoading, isError, error } = useQuery<IPost[]>({
        queryKey: ['todos'],
        queryFn: apiService.getPosts,
        select: (data) => data.slice(0, 5)
    });

    const action = (num: number | null, log?: string) => {
        console.log(log);
        setState(num);
    };

    useEffect(() => {
        console.log('useEffect', state);
    }, [state]);

    return (
        <>
            <div>
                {isLoading && <div>Lädt Posts...</div>}
                {isError && <div>Fehler beim Laden: {error instanceof Error ? error.message : 'Unbekannter Fehler'}</div>}

                {posts && posts.map(post => (
                    <div key={post.id} className="p-1 border-b border-gray-100">
                        {post.title}
                    </div>
                ))}
            </div>

            {state && (
                <>
                    <h1 className="!text-black mt-4">Demo</h1>
                    <p>Ich bin eine {state}</p>
                </>
            )}

            <div className="flex gap-2 mt-4">
                <Button onClick={() => action(1, '123')}>Set 1</Button>
                <Button onClick={() => action(10, '123')}>Set 10</Button>
            </div>

            <div className="mt-2">
                {state === 10 ? 'es ist eine 10' : 'es ist keine 10'}
            </div>
            <div>
                Status: {state ?? 'Nicht gesetzt'}
            </div>
        </>
    );
}