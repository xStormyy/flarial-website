---
title: "MAJOR UPDATE - Keybind Handling & Visual Improvements"
date: "2025-07-12"
tag: "Client"
---

# MAJOR UPDATE 📝

## Module Changes 🆕

- **Modern Keybind Handling Module** - Fixes the keybind issue where movement doesn't resume after exiting GUI screens while holding keys
- **Skin Stealer/Cloner Module** - Allows you to equip someone else's skin with a single keybind! [#326](https://github.com/flarialmc/dll/issues/326) [#359](https://github.com/flarialmc/dll/issues/359) [#425](https://github.com/flarialmc/dll/issues/425)
- **Bind Dot Command** - Dot command to edit module keybinds `.bind <module> <key>` [#433](https://github.com/flarialmc/dll/issues/433)
- **Shader Loader** now works for 1.21.6x and 1.21.7x!

## Visual Improvements ✨

- Rewrote Blur code for improved quality
- Added an option to Render over or under UI in Motion Blur module
- Added Server name, player count, and ping in TabList module [#227](https://github.com/flarialmc/dll/issues/227)
- **Player Heads in TabList** - Player heads can now be toggled in the TabList module! [#141](https://github.com/flarialmc/dll/issues/141)
- Added Frame Time graph and 1% Lows in the debug screen!
- Added a Text Shadow option in the Debug Menu module [#441](https://github.com/flarialmc/dll/issues/441)

## Enhancements 🔥

- Improved the CPS Limiter module
- Improved the Block Outline module
- Added an option to adjust the Zoom Sensitivity in Zoom module!
- Added an Auto Search toggle in global settings to automatically search modules whenever ClickGUI/mod menu is opened
- Added a Date toggle for the Clock module
- Added an option to Hide DirectionHUD when opening TabList
- Added a color picker to customize Module Name Color in ClickGUI
- Added the ability to Bind using Mouse Buttons [#429](https://github.com/flarialmc/dll/issues/429)
- Added an option to change Max Players per Column in TabList
- Added 1.21.90 Mob Effects in PotionHUD
- Added Biome, Weather, World Time, and more! in Debug Menu module

## Bug Fixes 🐛

- Fixed ClickGUI not scrolling properly on Precision Trackpads [#58](https://github.com/flarialmc/dll/issues/58)
- Fixed Icons not working on Intel GPU's without Better Frames [#145](https://github.com/flarialmc/dll/issues/145)
- Fixed Staff in TabList Hierarchy
- Fixed Keybind Modules activating while in GUI's [#451](https://github.com/flarialmc/dll/issues/451)
- Fixed Reset All not working in certain module settings
- Fixed Background Shadows for Certain Modules
- Fixed CPS Counter undergoing mitosis
- Fixed Server Details showing in F3 menu while in singleplayer [#443](https://github.com/flarialmc/dll/issues/443)
- Fixed Zoom Scrolling not working in F3 menu
- Fixed Hotbar Scrolling while zoom scrolling
- Fixed Scaling Issues on F3 menu
- Fixed ClickGUI hiding cursor while attempting to activate while not in a world [#440](https://github.com/flarialmc/dll/issues/440)
- Fixed Item Physics crashing the game
- Fixed Config System resetting randomly
- Fixed Scripting Modules not working with the new config system
- Fixed Custom Command Prefix not persisting after restart
- Fixed Toggle Sprint and Toggle Sneak not working properly
- Fixed Nametag appearing in first person while using Vibrant Visuals
- Fixed 3D Crosshair appearing in Third Person Perspective
- Fixed TabList Text overflowing
- Fixed Color Picker opacity slider having the wrong color
- Fixed Textboxes displaying disallowed characters
- Fixed Zoom not working with FOV Changer [#438](https://github.com/flarialmc/dll/issues/438)
- Fixed [FLARIAL] Tag removing the player's name color on servers [#449](https://github.com/flarialmc/dll/issues/449)
- Fixed F3 Menu auto closing ClickGUI menu [#439](https://github.com/flarialmc/dll/issues/439)
- Fixed Zoom ignoring "Save Modifier" option [#456](https://github.com/flarialmc/dll/issues/456)
- And many many more bug fixes behind the scenes!

## Notice ⚠️

- Better Frames is currently unstable and can cause issues such as freezing/crashing the game upon injecting. If you are experiencing such issues, please run `.freeze` in commands
- Hurt Color is currently not working properly on the latest version (1.21.9x) please be patient and wait for a fix
- Input Delay problems caused by opening a GUI is currently a known issue and we do not have a fix for it. This is most likely an issue on Mojang's end