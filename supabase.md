Schritt 2: Personal Access Token erstellen

Öffne im Browser: https://supabase.com/dashboard/account/tokens
Klicke auf "Generate new token"
Gib ihm einen Namen (z. B. cli-manual)
Kopiere den Token sofort (wird nur einmal angezeigt!)


Schritt 3: Token als Umgebungsvariable setzen
export SUPABASE_ACCESS_TOKEN=dein_kopierter_token
⚠️ Ersetze dein_kopierter_token durch den tatsächlichen Wert (keine Anführungszeichen nötig).

Schritt 4: Testen
supabase db push
Falls das jetzt durchläuft, wissen wir: Der login-Befehl selbst ist buggy, aber die Variable funktioniert zuverlässig.

----
Schritt 5: Dauerhaft speichern (optional, aber empfehlenswert)   
Damit du das nicht bei jeder neuen Terminal-Sitzung wiederholen musst:  
nano ~/.bashrc  
Füge ganz unten ein:  
export SUPABASE_ACCESS_TOKEN=dein_kopierter_token  
Speichern mit Strg+O, Enter, dann Strg+X. Danach:  
source ~/.bashrc  
⚠️ Sicherheitshinweis: Da der Token dauerhaft in einer Datei liegt, achte darauf, dass niemand sonst Zugriff auf deinen Nutzer-Account hat. Für ein privates System ist das aber ein üblicher und praktikabler Weg.
