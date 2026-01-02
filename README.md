# PAL speed-up fix

PAL speed-up is a phenomenon that occurs when video content originally filmed at ~24 FPS (Frames Per Second), typically US shows and movies, is converted to the European PAL TV standard of 25 fps.

This script aims to fix that issue.

## What happens

1. **Frame rate conversion**  
   - Original: ~23.976 fps (~24 fps)  
   - PAL standard: 25 fps

2. **Video plays slightly faster**  
   - Duration shrinks by ~4%  
   - A 60-minute episode plays in ~57.6 minutes

3. **Audio pitch rises**  
   - Voices and music are slightly higher in pitch (~0.7 semitone)  
   - Audio may develop subtle wobble or artifacts when pitch correction algorithms try to compensate

## Why it matters

- Musicians, trained ears, or sensitive listeners notice that **voices sound thin or high-pitched**  
- Background music or sustained tones may also **develop subtle wobble or artifacts**  
- This is common when watching older US content on PAL-region streaming platforms

## How to fix in-browser (example)

Using a standard HTML `<video>` element in JavaScript, you can **restore the correct speed and pitch**.

Please refer to "pal-speed-up-fix.js" for the code.
