create table todos
(
    id      uuid primary key default gen_random_uuid(),
    user_id uuid references auth.users not null,
    todo    text
);

-- RLS aktivieren
alter table todos enable row level security;

-- SELECT (nur eigene Todos sehen)
create
policy "Users can view their own todos"
on todos
for
select
    using (auth.uid() = user_id);

-- INSERT (nur für sich selbst erstellen)
create
policy "Users can insert their own todos"
on todos
for insert
with check (auth.uid() = user_id);

-- UPDATE (nur eigene bearbeiten)
create
policy "Users can update their own todos"
on todos
for
update
    using (auth.uid() = user_id)
with check (auth.uid() = user_id);

-- DELETE (nur eigene löschen)
create
policy "Users can delete their own todos"
on todos
for delete
using (auth.uid() = user_id);