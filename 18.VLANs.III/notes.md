### Method 1 of configuring Native VLAN on a router:
![alt text](image.png)
- Note that the IP address is already configured

### Method 2 of configuring Native VLAN on a router:
- This method avoids using a sub-interface
![alt text](image-1.png)
![alt text](image-2.png)

### Layer 3 (Multilayer) Switches, with SVIs (Switch Virtual Interfaces):
- Notice the non-trunk Point to Point connection between the Layer 3 switch and Router R1. With a L3 switch, it can handle all routing between the VLANs independently, so the Point to Point connection connection with RI is reserved for a Static Default Route that points to the internet.
![alt text](image-3.png)
![alt text](image-4.png)

![VLANS (Part 3)_260312_203558](https://github.com/user-attachments/assets/65852b3b-b2c3-4ea2-9655-c83e46c6ee4a)
