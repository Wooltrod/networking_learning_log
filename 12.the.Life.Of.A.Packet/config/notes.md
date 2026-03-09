### The topology:
![alt text](image.png)

1. PC1 pings PC4.  
Identify the src/dst MAC address at each specified point in the route to PC4.
Identify the MAC address by the device and interface (ie. the MAC of R1 G0/0)
- Source/Destination MAC at PC1 → SW1 segment (Compare the 'In Layers' & 'Out Layers' - the Switch does not modify anything)
![alt text](image-1.png)
Source MAC Address: 00D0.BA11.1111
Destination MAC Address: 0000.01AA.AAAA

- Source/Destination MAC at SW1 → R1 segment
![alt text](image-2.png)
Source MAC Address: 00D0.BA11.1111
Destination MAC Address: 0000.01AA.AAAA

- Source/Destination MAC at R1 → R2 segment
![alt text](image-3.png)
Source MAC Address: 0000.01BB.BBBB
Destination MAC Address: 0000.01CCC.CCCC

- Source/Destination MAC at R2 → R3 segment
![alt text](image-4.png)
Source MAC Address: 0000.01DD.DDDD
Destination MAC Address: 0000.01EE.EEEE

- Source/Destination MAC at R3 → SW2 segment
![alt text](image-5.png)
Source MAC Address: 0000.01FF.FFFF
Destination MAC Address: 000C.8544.4444

- Source/Destination MAC at SW2 → PC4 segment
![alt text](image-6.png)
Source MAC Address: 0000.01FF.FFFF
Destination MAC Address: 000C.8544.4444

Use the CLI and Packet Tracer's simulation mode to verify your answers.
(Before you enter simulation mode, ping once to complete ARP/the MAC learning process.)