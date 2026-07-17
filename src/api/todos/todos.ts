import {supabase} from "@/lib/supabase"

// ---------------------------------------------
// Read all todos
// ---------------------------------------------
export const fetchTodos = async () => {
    const {data, error} = await supabase
        .from("todos")
        .select("*")
        .order("id", {ascending: true})

    if (error) {
        throw new Error(error.message)
    }

    return data
}

// ---------------------------------------------
// Insert
// ---------------------------------------------
export const addTodo = async (todo: string) => {
    const {data: userData, error: userError} = await supabase.auth.getUser()

    if (userError || !userData.user) {
        throw new Error("Nicht eingeloggt")
    }

    const {data, error} = await supabase
        .from("todos")
        .insert([{todo, user_id: userData.user.id}])
        .select()

    if (error) {
        throw new Error(error.message)
    }

    return data
}

// ---------------------------------------------
// Update
// ---------------------------------------------
export const updateTodo = async ({
                                     id,
                                     todo,
                                 }: {
    id: string
    todo: string
}) => {
    const {data, error} = await supabase
        .from("todos")
        .update({todo})
        .eq("id", id)
        .select()

    if (error) {
        throw new Error(error.message)
    }

    return data
}

// ---------------------------------------------
// Delete
// ---------------------------------------------
export const deleteTodo = async (id: string) => {
    const {error} = await supabase
        .from("todos")
        .delete()
        .eq("id", id)

    if (error) {
        throw new Error(error.message)
    }
}