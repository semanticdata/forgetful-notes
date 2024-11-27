---
title: "Build a Scrolling Shooter with LÖVE in 200 Lines of Lua"
description: "Learn how to create a basic shooter game in LÖVE2D in less than 200 lines of Lua."
date: "2024-09-20"
compartir: true
category: Tutorials
tags: [tutorial]
---

In this tutorial, we'll guide you through the process of creating a simple scrolling shooter game using **LÖVE**, a Lua-based game development framework. The game involves controlling a plane, shooting bullets, spawning enemies, and handling collisions. Take a look at the final [source code](https://github.com/semanticdata/love2d-tutorials/tree/main/scrolling-shooter).

---

## 1. Setup the Project and Environment

- **Install LÖVE**: Download and install LÖVE from the [official website](https://love2d.org/).
- **Project Structure**:
  - Create a new folder for your game project.
  - Inside this folder, create two files: `conf.lua` and `main.lua`.
  - Create an `assets` folder to store images and sounds.

## 2. Configure the Game Window (`conf.lua`)

Set up the game window dimensions and title.

```lua
function love.conf(t)
    t.title = "Scrolling Shooter"  -- Window title
    t.version = "11.4"             -- LOVE2D version
    t.window.width = 480           -- Window width
    t.window.height = 800          -- Window height
end
```

- **Explanation**: A vertical window is ideal for a scrolling shooter.

## 3. Load Assets and Initialize Variables (`main.lua`)

### 3.1 Initialize Game Variables

At the top of `main.lua`, declare global variables for timers, player properties, images, sounds, and game state.

```lua
-- Timers
canShoot = true
canShootTimerMax = 0.2
canShootTimer = canShootTimerMax
createEnemyTimerMax = 0.4
createEnemyTimer = createEnemyTimerMax

-- Player Object
player = { x = 200, y = 710, speed = 150, img = nil }
isAlive = true
score = 0

-- Image Storage
bulletImg = nil
enemyImg = nil

-- Sound Storage
gunSound = nil

-- Entity Storage
bullets = {}  -- Bullets in play
enemies = {}  -- Enemies in play
```

### 3.2 Load Assets

In the `love.load` function, load images and sounds.

```lua
function love.load()
    player.img = love.graphics.newImage('assets/plane.png')
    bulletImg = love.graphics.newImage('assets/bullet.png')
    enemyImg = love.graphics.newImage('assets/enemy.png')
    gunSound = love.audio.newSource('assets/gun-sound.wav', 'static')
end
```

- **Explanation**: Ensure the assets exist in the `assets` folder.

## 4. Handle Player Input and Movement

### 4.1 Movement Controls

In the `love.update` function, handle player movement based on key presses.

```lua
-- Horizontal movement
if love.keyboard.isDown('left', 'a') then
    if player.x > 0 then
        player.x = player.x - (player.speed * dt)
    end
elseif love.keyboard.isDown('right', 'd') then
    if player.x < (love.graphics.getWidth() - player.img:getWidth()) then
        player.x = player.x + (player.speed * dt)
    end
end

-- Vertical movement
if love.keyboard.isDown('up', 'w') then
    if player.y > (love.graphics.getHeight() / 2) then
        player.y = player.y - (player.speed * dt)
    end
elseif love.keyboard.isDown('down', 's') then
    if player.y < (love.graphics.getHeight() - 55) then
        player.y = player.y + (player.speed * dt)
    end
end
```

- **Explanation**: The player cannot move off-screen.

### 4.2 Shooting Controls

Allow the player to shoot bullets.

```lua
if love.keyboard.isDown('space', 'rctrl', 'lctrl') and canShoot then
    -- Create a new bullet
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
```

- **Explanation**: Shooting is limited by a timer to prevent spamming bullets.

## 5. Implement Shooting Mechanics

### 5.1 Update Shooting Timer

In `love.update`, decrement the shooting timer.

```lua
-- Update shooting timer
canShootTimer = canShootTimer - (1 * dt)
if canShootTimer < 0 then
    canShoot = true
end
```

### 5.2 Move Bullets

Update bullet positions and remove them if they go off-screen.

```lua
for i, bullet in ipairs(bullets) do
    bullet.y = bullet.y - (250 * dt)
    if bullet.y < 0 then
        table.remove(bullets, i)
    end
end
```

## 6. Spawn Enemies and Manage Movement

### 6.1 Enemy Spawn Timer

Control the rate at which enemies appear.

```lua
-- Update enemy spawn timer
createEnemyTimer = createEnemyTimer - (1 * dt)
if createEnemyTimer < 0 then
    createEnemyTimer = createEnemyTimerMax

    -- Spawn a new enemy
    randomX = math.random(10, love.graphics.getWidth() - 10)
    newEnemy = { x = randomX, y = -10, img = enemyImg }
    table.insert(enemies, newEnemy)
end
```

### 6.2 Move Enemies

Update enemy positions and remove them if they exit the screen.

```lua
for i, enemy in ipairs(enemies) do
    enemy.y = enemy.y + (200 * dt)
    if enemy.y > 850 then
        table.remove(enemies, i)
    end
end
```

## 7. Detect Collisions and Update Game State

### 7.1 Collision Detection Function

Define a function to check for collisions.

```lua
function CheckCollision(x1, y1, w1, h1, x2, y2, w2, h2)
    return x1 < x2 + w2 and
           x2 < x1 + w1 and
           y1 < y2 + h2 and
           y2 < y1 + h1
end
```

### 7.2 Handle Collisions

Check for collisions between bullets and enemies, and between enemies and the player.

```lua
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

    if CheckCollision(
        enemy.x, enemy.y, enemy.img:getWidth(), enemy.img:getHeight(),
        player.x, player.y, player.img:getWidth(), player.img:getHeight()
    ) and isAlive then
        table.remove(enemies, i)
        isAlive = false
    end
end
```

- **Explanation**: When an enemy is hit by a bullet, both are removed, and the score increases. If an enemy collides with the player, the game is over.

## 8. Render Graphics on the Screen

### 8.1 Draw Bullets and Enemies

In the `love.draw` function, render bullets and enemies.

```lua
for i, bullet in ipairs(bullets) do
    love.graphics.draw(bullet.img, bullet.x, bullet.y)
end

for i, enemy in ipairs(enemies) do
    love.graphics.draw(enemy.img, enemy.x, enemy.y)
end
```

### 8.2 Draw Player and HUD

Render the player and the score.

```lua
-- Set color to white
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
```

- **Explanation**: If the player is dead, prompt to restart the game.

## 9. Restart the Game After Game Over

Allow the player to restart the game by pressing 'R'.

```lua
if not isAlive and love.keyboard.isDown('r') then
    -- Reset game state
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

## 10. Additional Features and Tips

- **Debugging Mode**: Add a debug mode to display FPS or other stats.
- **Boundaries**: Ensure the player and enemies stay within the screen bounds.
- **Game Balance**: Adjust timers and speeds to make the game challenging but fair.
- **Asset Quality**: Use high-quality images and sounds to enhance the gaming experience.
- **Extensions**:
  - Add power-ups.
  - Introduce different enemy types.
  - Implement levels or waves.

---

## Conclusion

By following this tutorial, you've created a functional scrolling shooter game using LOVE2D. This project covers fundamental game development concepts like rendering graphics, handling user input, collision detection, and managing game states. You can build upon this foundation to create more complex and engaging games.

Go and take a look at the [source code](https://github.com/semanticdata/love2d-tutorials/tree/main/scrolling-shooter) for the finished example.

**Happy Coding!**
