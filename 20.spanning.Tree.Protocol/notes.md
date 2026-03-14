### Example of a redundant network: 

![alt text](image.png)

- However, we should try and avoid having loops in the network in order to avoid Broadcast Storms, which may paralyse the network (notice the problematic link between SW3 & SW2).
![alt text](image-1.png)

- To solve the loop, we should place the redundant connection between SW3 & SW2 (the interface on SW3) in a blocking state. This essentially sets the connection as a backup that will only be activated if the SW1 - SW2 connection fails.

![alt text](image-2.png)

![alt text](image-3.png)

![alt text](image-4.png)

### Root Costs for Root Ports in STP:
![alt text](image-5.png)