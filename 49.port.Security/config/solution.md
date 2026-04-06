### The topology

![alt text](image.png)

1. Configure port security on the following interfaces:
    - **#SW1 F0/1, F0/2, F0/3#**
    - Violation mode: Shutdown
    - Maximum addresses: 1
    - Sticky learning: Disabled
    - Aging time: 1 hour

    - **#SW2 G0/1#**
    - Violation mode: Restrict
    - Maximum addresses: 4
    - Sticky learning: Enabled

2. Trigger port security violations on SW1 and SW2 (for example by 
    connecting another PC) and observe the actions taken by each switch.