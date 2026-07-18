import { supabase } from "@/lib/supabase";

export type Todo = {
    id: string;
    todo: string;
    user_id: string;
};

export const todosAPI = {
    // ---------------------------------------------
    // Read all todos
    // ---------------------------------------------
    async fetchTodos(): Promise<Todo[]> {
        const { data, error } = await supabase
            .from("todos")
            .select("*")
            .order("id", { ascending: true });

        if (error) {
            throw new Error(error.message);
        }

        return data ?? [];
    },

    // ---------------------------------------------
    // Insert
    // ---------------------------------------------
    async addTodo(todo: string): Promise<Todo[]> {
        const { data: userData, error: userError } =
            await supabase.auth.getUser();

        if (userError || !userData.user) {
            throw new Error("Nicht eingeloggt");
        }

        const { data, error } = await supabase
            .from("todos")
            .insert([{ todo, user_id: userData.user.id }])
            .select();

        if (error) {
            throw new Error(error.message);
        }

        return data ?? [];
    },

    // ---------------------------------------------
    // Update
    // ---------------------------------------------
    async updateTodo({
                         id,
                         todo,
                     }: {
        id: string;
        todo: string;
    }): Promise<Todo[]> {
        const { data, error } = await supabase
            .from("todos")
            .update({ todo })
            .eq("id", id)
            .select();

        if (error) {
            throw new Error(error.message);
        }

        return data ?? [];
    },

    // ---------------------------------------------
    // Delete
    // ---------------------------------------------
    async deleteTodo(id: string): Promise<void> {
        const { error } = await supabase
            .from("todos")
            .delete()
            .eq("id", id);

        if (error) {
            throw new Error(error.message);
        }
    },
};