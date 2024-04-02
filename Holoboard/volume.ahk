#Requires AutoHotkey v2.0

; Custom volume buttons

^NumpadAdd::Send "{Volume_Up}"            ; Ctrl + Numpad Plus increases volume by 2 steps
^NumpadSub::Send "{Volume_Down}"          ; Ctrl + Numpad Minus decreases volume by 2 steps
^PrintScreen::Send "{Volume_Mute}"        ; Ctrl + PrintScreen mutes/unmutes

return 