### The topology:
![alt text](image.png)

1. Configure the correct IP address/subnet mask on each PC.
    Set the gateway address as the LAST USABLE address of the subnet.

2. Make three connections between R1 and SW1.
    Configure one interface on R1 for each VLAN.
    Make sure the IP addresses are the gateway address you configured on the PCs.

3. Configure SW1's interfaces in the proper VLANs.
    Remember the interfaces that connect to R1!
    Name the VLANs
     (Engeering, HR, Sales)

4. Ping between the PCs to check connectivity.
    Send a broadcast ping from a PC (ping the subnet broadcast address),
     and see which PCs devices receive the broadcast
      (use Packet Tracer's 'Simulation Mode')