import {
  layer,
  map,
  NumberKeyValue,
  rule,
  withMapper,
  writeToProfile,
  isSideMultiModifierAlias,
  parseSideMultiModifierAlias,
  SideModifierAlias,
  ArrowKeyCode,
  arrowKeyCodes,
  ControlOrSymbolKeyCode,
  controlOrSymbolKeyCodes,
  fromOnlyKeyCodes,
  functionKeyCodes,
  internationalKeyCodes,
  japaneseKeyCodes,
  KeyCode,
  keypadKeyCodes,
  letterKeyCodes,
  modifierKeyCodes,
  numberKeyCodes,
  otherKeyCodes,
  pcKeyboardKeyCodes,
  stickyModifierKeyCodes,
  toOnlyKeyCodes,
  simlayer,
  mapSimultaneous,
  toKey,
  toStickyModifier,
  BasicParameters,
  toNone,
} from "karabiner.ts";

writeToProfile(
  "HomeRowMods",
  [
    // Home row mods
    rule("Home row mods - opt, ctrl, cmd, shift").manipulators([
      //
      // Four - left hand
      mapSimultaneous(["a", "s", "d", "f"]).toIfHeldDown("l⇧", ["l⌘⌥⌃"]),
      map("e")
        .toIfAlone("e", {}, { halt: true })
        .toDelayedAction(toKey("vk_none"), toKey("e"))
        .toIfHeldDown("l⇧", ["l⌘⌥⌃"]),
      map("i")
        .toIfAlone("i", {}, { halt: true })
        .toDelayedAction(toKey("vk_none"), toKey("i"))
        .toIfHeldDown("l⇧", ["l⌘⌥⌃"]),

      //
      // One - left hand
      map("a")
        .toIfAlone("a", {}, { halt: true })
        .toDelayedAction(toKey("vk_none"), toKey("a"))
        .toIfHeldDown("l⌥", {}, { halt: true }),
      map("s")
        .toIfAlone("s", {}, { halt: true })
        .toDelayedAction(toKey("vk_none"), toKey("s"))
        .toIfHeldDown("l⌃", {}, { halt: true }),
      map("d")
        .toIfAlone("d", {}, { halt: true })
        .toDelayedAction(toKey("vk_none"), toKey("d"))
        .toIfHeldDown("l⌘", {}, { halt: true }),
      map("f")
        .toIfAlone("f", {}, { halt: true })
        .toDelayedAction(toKey("vk_none"), toKey("f", {}, { halt: true }))
        .toIfHeldDown("l⇧", {}, { halt: true }),
      // One - right hand
      map(";")
        .toIfAlone(";", {}, { halt: true })
        .toDelayedAction(toKey("vk_none"), toKey(";"))
        .toIfHeldDown("r⌥", {}, { halt: true }),
      map("l")
        .toIfAlone("l", {}, { halt: true })
        .toDelayedAction(toKey("vk_none"), toKey("l"))
        .toIfHeldDown("r⌃", {}, { halt: true }),
      map("k")
        .toIfAlone("k", {}, { halt: true })
        .toDelayedAction(toKey("vk_none"), toKey("k"))

        .toIfHeldDown("r⌘", {}, { halt: true }),

      map("j")
        .toIfAlone("j", {}, { halt: true })
        .toDelayedAction(toKey("vk_none"), toKey("j"))
        .toIfHeldDown("r⇧", {}, { halt: true }),
    ]),
  ],
  {
    "basic.to_if_held_down_threshold_milliseconds": 120,
  }
);
