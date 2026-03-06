# The topology
![alt text](image.png)

### When PC1 pings PC3:
1. I assume that because an IPV4 address is involved, the ARP Protocol is invoked, therefore an ARP request is sent first, via broadcast.

2. SW1 & SW2 learn the MAC addresses of these two PCs involved in the exchange, using it to build their MAC address tables:
![alt text](image-2.png)
![alt text](image-3.png)

3. PC1's ARP table, on successful reply from PC3, builds its ARP table (command: arp -a) containing only the details of PC3:
![alt text](image-1.png)

4. PC3 has also learned the details of PC1 in this ping exchange, and uses it to build its ARP table:
![alt text](image-4.png)

### When PC2 pings PC4:
1. ARP Protocol invoked (IP Addresses involved)

2. SW1 & SW2 learn the MAC addresses of these two PCs involved in the exchange, using it to build their MAC address tables, after which the tables are complete:
![alt text](image-5.png)
![alt text](image-6.png)

3. PC2 and PC4 have learned of each others details, using this to create their own ARP tables:
![alt text](image-7.png)
![alt text](image-8.png)

### Additional when PC1 pings PC3:
Step 1: ARP Request (Broadcast) sent to PC2, PC3 & PC4. PC2 & PC4 drop the frame.

Step 2: ARP Reply (unicast) sent by PC3 back to PC1.

Step 3: To complete the ping (reachability test) ICMP Echo Requests and ICMP Echo Replies exchanged between the two 4 times.