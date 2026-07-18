import { useState } from "react";
import { todosAPI, type Todo } from "@/api/todos/todos-api";

import {
    useMutation,
    useQuery,
    useQueryClient,
} from "@tanstack/react-query";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Trash2, Loader2, Pencil, Check, X } from "lucide-react";

// ---------------------------------------------
// Hooks
// ---------------------------------------------
function useTodos() {
    return useQuery<Todo[]>({
        queryKey: ["todos"],
        queryFn: todosAPI.fetchTodos,
    });
}

function useAddTodo() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: todosAPI.addTodo,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["todos"] });
        },
    });
}

function useDeleteTodo() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: todosAPI.deleteTodo,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["todos"] });
        },
    });
}

function useUpdateTodo() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: todosAPI.updateTodo,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["todos"] });
        },
    });
}

// ---------------------------------------------
// Component
// ---------------------------------------------
export default function Todos() {
    const { data: todos, isLoading, error } = useTodos();

    const addTodoMutation = useAddTodo();
    const deleteTodoMutation = useDeleteTodo();
    const updateTodoMutation = useUpdateTodo();

    const [title, setTitle] = useState("");
    const [editingId, setEditingId] = useState<string | null>(null);
    const [editValue, setEditValue] = useState("");

    const handleAdd = () => {
        if (!title.trim()) return;

        addTodoMutation.mutate(title, {
            onSuccess: () => setTitle(""),
        });
    };

    const startEdit = (id: string, currentTodo: string) => {
        setEditingId(id);
        setEditValue(currentTodo);
    };

    const cancelEdit = () => {
        setEditingId(null);
        setEditValue("");
    };

    const saveEdit = (id: string) => {
        if (!editValue.trim()) return;

        updateTodoMutation.mutate(
            { id, todo: editValue },
            {
                onSuccess: () => {
                    setEditingId(null);
                    setEditValue("");
                },
            }
        );
    };

    return (
        <Card className="max-w-md mx-auto mt-10">
            <CardHeader>
                <CardTitle>Todos</CardTitle>
            </CardHeader>

            <CardContent className="space-y-4">
                <div className="flex gap-2">
                    <Input
                        placeholder="Neues Todo"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <Button
                        onClick={handleAdd}
                        disabled={addTodoMutation.isPending}
                    >
                        {addTodoMutation.isPending ? (
                            <Loader2 className="h-4 w-4 animate-spin" />
                        ) : (
                            "Hinzufügen"
                        )}
                    </Button>
                </div>

                {isLoading && <p>Lädt...</p>}
                {error && <p>Fehler: {(error as Error).message}</p>}

                <ul className="space-y-2">
                    {todos?.map((t) => (
                        <li
                            key={t.id}
                            className="flex justify-between border p-2"
                        >
                            {editingId === t.id ? (
                                <>
                                    <Input
                                        value={editValue}
                                        onChange={(e) =>
                                            setEditValue(e.target.value)
                                        }
                                    />
                                    <Button onClick={() => saveEdit(t.id)}>
                                        <Check />
                                    </Button>
                                    <Button onClick={cancelEdit}>
                                        <X />
                                    </Button>
                                </>
                            ) : (
                                <>
                                    <span>{t.todo}</span>
                                    <div className="flex gap-2">
                                        <Button
                                            onClick={() =>
                                                startEdit(t.id, t.todo)
                                            }
                                        >
                                            <Pencil />
                                        </Button>
                                        <Button
                                            onClick={() =>
                                                deleteTodoMutation.mutate(t.id)
                                            }
                                            disabled={
                                                deleteTodoMutation.isPending
                                            }
                                        >
                                            <Trash2 />
                                        </Button>
                                    </div>
                                </>
                            )}
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    );
}