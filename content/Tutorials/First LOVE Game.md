---
title: Build a Scrolling Shooter with LÖVE in 200 Lines of Lua
description: Create a complete 2D shooter game using LÖVE2D framework with collision detection and game states.
date: 2024-09-20
difficulty: Intermediate
compartir: true
category: Tutorials
tags: [tutorial]
---

Game development can seem daunting, but LÖVE2D makes it approachable with its simple Lua-based framework. In this tutorial, we'll build a complete shooter game that covers all the fundamental concepts you need to understand game development.

## What You'll Build/Achieve

You'll create a fully functional scrolling shooter game with player movement, bullet mechanics, enemy spawning, collision detection, and score tracking using the LÖVE2D framework.

## Prerequisites

- LÖVE2D installed on your system
- Basic Lua programming knowledge
- Understanding of game loops and coordinate systems

## 1. Project Setup

Create a new folder for your game and add two files: `conf.lua` and `main.lua`. Also create an `assets` folder for images and sounds.

Configure the game window in `conf.lua`. We use a vertical orientation because scrolling shooters typically move vertically:

```lua title="conf.lua"
function love.conf(t)
    t.title = "Scrolling Shooter"
    t.version = "11.4"
    t.window.width = 480
    t.window.height = 800
end
```

## 2. Initialize Game Variables

Set up global variables for game state management. We separate concerns by grouping related variables:

```lua title="main.lua"
-- Timers for game mechanics
canShoot = true
canShootTimerMax = 0.2
canShootTimer = canShootTimerMax
createEnemyTimerMax = 0.4
createEnemyTimer = createEnemyTimerMax

-- Player object with properties
player = { x = 200, y = 710, speed = 150, img = nil }
isAlive = true
score = 0

-- Asset storage
bulletImg = nil
enemyImg = nil
gunSound = nil

-- Game entities (using tables for dynamic management)
bullets = {}
enemies = {}
```

## 3. Load Assets

Load all game assets in `love.load()`. This ensures assets are available throughout the game lifecycle:

```lua
function love.load()
    player.img = love.graphics.newImage('assets/plane.png')
    bulletImg = love.graphics.newImage('assets/bullet.png')
    enemyImg = love.graphics.newImage('assets/enemy.png')
    gunSound = love.audio.newSource('assets/gun-sound.wav', 'static')
end
```

## 4. Handle Player Input and Movement

Implement smooth movement using delta time (`dt`) for frame-rate independent motion. We restrict movement to keep the player on-screen and limit vertical movement to maintain game balance:

```lua
function love.update(dt)
    -- Horizontal movement with boundary checking
    if love.keyboard.isDown('left', 'a') then
        if player.x > 0 then
            player.x = player.x - (player.speed * dt)
        end
    elseif love.keyboard.isDown('right', 'd') then
        if player.x < (love.graphics.getWidth() - player.img:getWidth()) then
            player.x = player.x + (player.speed * dt)
        end
    end

    -- Vertical movement (restricted to lower half)
    if love.keyboard.isDown('up', 'w') then
        if player.y > (love.graphics.getHeight() / 2) then
            player.y = player.y - (player.speed * dt)
        end
    elseif love.keyboard.isDown('down', 's') then
        if player.y < (love.graphics.getHeight() - 55) then
            player.y = player.y + (player.speed * dt)
        end
    end
end
```

## 5. Implement Shooting System

Create a rate-limited shooting system to prevent bullet spam while maintaining responsive controls:

```lua
-- Add to love.update(dt)
if love.keyboard.isDown('space', 'rctrl', 'lctrl') and canShoot then
    -- Create bullet at player center
    newBullet = {
        x = player.x + (player.img:getWidth() / 2),
        y = player.y,
        img = bulletImg
    }
    table.insert(bullets, newBullet)
    gunSound:play()
    canShoot = false
    canShootTimer = canShootTimerMax
end

-- Update shooting cooldown
canShootTimer = canShootTimer - (1 * dt)
if canShootTimer < 0 then
    canShoot = true
end

-- Move bullets and remove off-screen ones
for i, bullet in ipairs(bullets) do
    bullet.y = bullet.y - (250 * dt)
    if bullet.y < 0 then
        table.remove(bullets, i)
    end
end
```

## 6. Enemy Spawning and Management

Implement dynamic enemy spawning with cleanup for performance. Random positioning adds unpredictability:

```lua
-- Add to love.update(dt)
createEnemyTimer = createEnemyTimer - (1 * dt)
if createEnemyTimer < 0 then
    createEnemyTimer = createEnemyTimerMax
    
    -- Spawn enemy at random X position
    randomX = math.random(10, love.graphics.getWidth() - 10)
    newEnemy = { x = randomX, y = -10, img = enemyImg }
    table.insert(enemies, newEnemy)
end

-- Move enemies downward
for i, enemy in ipairs(enemies) do
    enemy.y = enemy.y + (200 * dt)
    if enemy.y > 850 then
        table.remove(enemies, i)
    end
end
```

## 7. Collision Detection

Implement axis-aligned bounding box (AABB) collision detection, which is efficient for rectangular sprites:

```lua
function CheckCollision(x1, y1, w1, h1, x2, y2, w2, h2)
    return x1 < x2 + w2 and
           x2 < x1 + w1 and
           y1 < y2 + h2 and
           y2 < y1 + h1
end

-- Add collision checks to love.update(dt)
for i, enemy in ipairs(enemies) do
    for j, bullet in ipairs(bullets) do
        if CheckCollision(
            enemy.x, enemy.y, enemy.img:getWidth(), enemy.img:getHeight(),
            bullet.x, bullet.y, bullet.img:getWidth(), bullet.img:getHeight()
        ) then
            table.remove(bullets, j)
            table.remove(enemies, i)
            score = score + 1
        end
    end

    -- Player collision (game over)
    if CheckCollision(
        enemy.x, enemy.y, enemy.img:getWidth(), enemy.img:getHeight(),
        player.x, player.y, player.img:getWidth(), player.img:getHeight()
    ) and isAlive then
        table.remove(enemies, i)
        isAlive = false
    end
end
```

## 8. Render Game Graphics

Draw all game elements in proper layering order:

```lua
function love.draw()
    -- Draw bullets
    for i, bullet in ipairs(bullets) do
        love.graphics.draw(bullet.img, bullet.x, bullet.y)
    end

    -- Draw enemies
    for i, enemy in ipairs(enemies) do
        love.graphics.draw(enemy.img, enemy.x, enemy.y)
    end

    -- Draw UI and player
    love.graphics.setColor(255, 255, 255)
    love.graphics.print("SCORE: " .. tostring(score), 400, 10)

    if isAlive then
        love.graphics.draw(player.img, player.x, player.y)
    else
        love.graphics.print(
            "Press 'R' to restart",
            love.graphics:getWidth() / 2 - 50,
            love.graphics:getHeight() / 2 - 10
        )
    end
end
```

## 9. Game Reset System

Implement game state reset for replay functionality:

```lua
-- Add to love.update(dt)
if not isAlive and love.keyboard.isDown('r') then
    -- Reset all game state
    bullets = {}
    enemies = {}
    canShootTimer = canShootTimerMax
    createEnemyTimer = createEnemyTimerMax
    player.x = 50
    player.y = 710
    score = 0
    isAlive = true
end
```

## Verification

You'll know it worked when you can control the player ship with arrow keys/WASD, shoot bullets with spacebar, enemies spawn and move down the screen, collisions register correctly, and you can restart after game over.

## Common Issues

**Problem**: Game runs too fast or slow on different computers  
**Solution**: Ensure you're using `dt` (delta time) in all movement calculations for frame-rate independence

**Problem**: Bullets or enemies don't appear  
**Solution**: Check that asset files exist in the `assets` folder and verify file names match exactly

**Problem**: Collision detection seems off  
**Solution**: Make sure sprite dimensions are calculated correctly using `img:getWidth()` and `img:getHeight()`

**Problem**: Game crashes when removing table elements  
**Solution**: When removing items from tables during iteration, iterate backwards or use flags to mark for removal
