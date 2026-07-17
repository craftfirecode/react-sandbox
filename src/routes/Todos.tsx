import { useState } from "react"
import { useTodos, useAddTodo, useDeleteTodo, useUpdateTodo } from "@/api/todos/todos.ts"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Trash2, Loader2, Pencil, Check, X } from "lucide-react"

export default function Todos() {
    const { data: todos, isLoading, error } = useTodos()
    const addTodo = useAddTodo()
    const deleteTodo = useDeleteTodo()
    const updateTodo = useUpdateTodo()

    const [title, setTitle] = useState("")
    const [editingId, setEditingId] = useState<string | null>(null)
    const [editValue, setEditValue] = useState("")

    const handleAdd = () => {
        if (!title.trim()) return
        addTodo.mutate(title, {
            onSuccess: () => setTitle(""),
        })
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") handleAdd()
    }

    const startEdit = (id: string, currentTodo: string) => {
        setEditingId(id)
        setEditValue(currentTodo)
    }

    const cancelEdit = () => {
        setEditingId(null)
        setEditValue("")
    }

    const saveEdit = (id: string) => {
        if (!editValue.trim()) return
        updateTodo.mutate(
            { id, todo: editValue },
            {
                onSuccess: () => {
                    setEditingId(null)
                    setEditValue("")
                },
            }
        )
    }

    const handleEditKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, id: string) => {
        if (e.key === "Enter") saveEdit(id)
        if (e.key === "Escape") cancelEdit()
    }

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
                        onKeyDown={handleKeyDown}
                    />
                    <Button onClick={handleAdd} disabled={addTodo.isPending}>
                        {addTodo.isPending ? (
                            <Loader2 className="h-4 w-4 animate-spin" />
                        ) : (
                            "Hinzufügen"
                        )}
                    </Button>
                </div>

                {isLoading && <p className="text-sm text-muted-foreground">Lädt...</p>}
                {error && (
                    <p className="text-sm text-destructive">Fehler: {error.message}</p>
                )}

                <ul className="space-y-2">
                    {todos?.map((t) => (
                        <li
                            key={t.id}
                            className="flex items-center justify-between rounded-md border px-3 py-2 gap-2"
                        >
                            {editingId === t.id ? (
                                <>
                                    <Input
                                        value={editValue}
                                        onChange={(e) => setEditValue(e.target.value)}
                                        onKeyDown={(e) => handleEditKeyDown(e, t.id)}
                                        autoFocus
                                    />
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={() => saveEdit(t.id)}
                                        disabled={updateTodo.isPending}
                                    >
                                        <Check className="h-4 w-4 text-green-600" />
                                    </Button>
                                    <Button variant="ghost" size="icon" onClick={cancelEdit}>
                                        <X className="h-4 w-4" />
                                    </Button>
                                </>
                            ) : (
                                <>
                                    <span className="flex-1">{t.todo}</span>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={() => startEdit(t.id, t.todo)}
                                    >
                                        <Pencil className="h-4 w-4" />
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={() => deleteTodo.mutate(t.id)}
                                        disabled={deleteTodo.isPending}
                                    >
                                        <Trash2 className="h-4 w-4 text-destructive" />
                                    </Button>
                                </>
                            )}
                        </li>
                    ))}
                </ul>

                {todos?.length === 0 && (
                    <p className="text-sm text-muted-foreground text-center">
                        Keine Todos vorhanden.
                    </p>
                )}
            </CardContent>
        </Card>
    )
}