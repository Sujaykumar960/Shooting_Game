# GPT-6 Astra

A dependency-free, modular browser FPS vertical slice. It uses a performant Canvas raycaster, Web Audio event synthesis, pooled effects, state-machine AI, data-driven weapons/enemies, persistent settings/checkpoints, keyboard/mouse, and Gamepad API controls.

## Run

```bash
cd gpt6-astra
python3 -m http.server 8080
```

Open `http://localhost:8080`. Click the game to capture the mouse. Modern Chrome/Edge/Firefox recommended.

No dependency installation is required. Node + Playwright are only used by the included smoke test in this development environment.

## Controls

| Action | Keyboard / mouse | Controller |
|---|---|---|
| Move | WASD | Left stick |
| Aim | Mouse | Right stick |
| Fire / ADS | Left / right click | RT / LT |
| Reload | R | X |
| Sprint | Left Shift | L3 |
| Crouch | C | B |
| Jump input | Space | A |
| Melee | V | R3 |
| Interact | E | Y |
| Weapon select | 1–5 | Input architecture ready for D-pad mapping |
| Pause | Escape | Menu |

## Architecture

- `src/Game.js` — composition root, fixed responsibilities, game loop, collision, combat traces, checkpoints.
- `src/config.js` — data-driven map, weapons, enemies, difficulty, bindings.
- `src/core/` — event bus, unified input, event-based audio, versioned saves.
- `src/entities/` — player controller/health and enemy state machine.
- `src/systems/` — weapons, pooled particles, wave spawning, missions.
- `src/render/Renderer.js` — raycast world, depth-tested sprites, weapon viewmodel, minimap.
- `src/ui/UIManager.js` — HUD, hit/kill feedback, boss bar, result screens.

Core loop: choose mode → spawn wave/objective → move/ADS/fire/reload/switch → enemies detect/chase/attack/retreat → earn score/combo/pickups → checkpoint → boss/victory or death/restart.

## Add a weapon

Add one object to `WEAPONS` in `src/config.js`. The generic weapon system consumes damage, fire rate, magazine, reserve, reload, range, recoil, spread, headshot multiplier, pellet count, automatic mode, and presentation color. Add a weapon-specific audio event mapping only if a unique sound profile is needed.

## Add an enemy

Add a configuration in `ENEMIES`, then add its spawn weighting in `SpawnManager.update`. Existing state behavior supports patrol, investigate, search, chase, attack, and retreat. Add a specialized state branch only for genuinely unique behavior.

## Add a mission

Add a mode/phase definition to `MissionManager`, then use EventBus events (`objective`, `wave`, `boss`, `kill`) to advance it. Map encounter points live in `SpawnManager.points`; checkpoint spawn locations live in `Player.reset`.

## Performance

- Hitscan weapons avoid projectile churn.
- ParticlePool reuses a fixed allocation.
- Ray resolution scales with graphics quality.
- Sprite rendering is depth-tested and distance-sorted.
- AI uses one orchestrated update path and inexpensive grid line-of-sight.
- Canvas resolution caps device pixel ratio.
- Enemy count and boss reinforcement count are bounded.
- Save writes occur only on settings/progress events, not per frame.

## Testing checklist

- Main menu, difficulty, settings, controls, pause, result screens.
- Campaign, Survival, Practice entry and reset.
- Mouse lock; WASD, ADS, fire, reload, melee, 1–5 weapon switching.
- Gamepad axes/buttons on target hardware.
- Body/head hits, falloff, hit marker, kill marker, combo, score.
- Enemy patrol/detection/chase/attack/retreat and boss reinforcements.
- Health/armor, damage flash, death, pickups, checkpoints, continue.
- Low/high graphics, volume, sensitivity, screen shake persistence.
- 1920×1080, 1366×768, and narrow viewport layout.
- Long Survival run for frame pacing and pooled-particle saturation.

## Known limitations

This is a polished browser vertical slice, not a multi-year asset-heavy AAA production. Rendering is a stylized raycast 3D pipeline rather than skeletal-mesh 3D; animation, destruction, recorded audio, authored cinematics, navmesh cover selection, online services, and full accessibility remapping would require an engine/content pipeline and production assets. Jump is mapped but intentionally has no vertical traversal in this arena map. Controller support uses the standard Gamepad API and may need per-device mapping adjustments.
