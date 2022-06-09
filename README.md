# Demo

https://keypad-time-to-open.vercel.app/

## Keypad game rules

Keypad e.g.:

|     |     |     |
| :-: | :-: | :-: |
|  9  |  2  |  3  |
|  8  |  5  |  7  |
|  6  |  1  |  4  |

And you're code is: `4 2 3 6 9 2`.

The goal here is to know how many seconds will a person take to enter the code, with the above values, a person will take 8 seconds to enter the correct code.

## How and why its takes 8 seconds?

The first entered number, will count as 0 sec, all adjacent will count as 1 sec and the rest will count 2 sec.

This being clarified, lets break down the values:

| Key pressed | Is Adjacent | Seconds |
| :---------: | :---------: | :-----: |
|      4      |  first key  |    0    |
|      2      |    false    |    2    |
|      3      |    false    |    1    |
|      6      |    false    |    2    |
|      9      |    false    |    2    |
|      2      |    false    |    1    |

---

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
