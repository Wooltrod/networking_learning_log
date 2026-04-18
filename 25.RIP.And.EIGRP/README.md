### RIP

![alt text](image.png)

![alt text](image-2.png)

### RIP Configuration (for the topology above):
![alt text](image-1.png)

- We should always use RIPv2 by specifying "version 2"
- "no auto summary" prevents RIPv2 from catergorizing IP Addresses into classful networks, which tends to lead to wrong netmasks.

**Specifics of how the 'network' command works**

![alt text](image-3.png)

![alt text](image-4.png)

- The network command doesn't tell the router which networks to advertise.It tells the router which interfaces to activate RIP on, and then the router will advertise the network prefix of those interfaces.

**Passive Interfaces:**

![alt text](image-5.png)

- Tells the router to stop sending RIP advertisements out of the specified interface.

**The default-information originate command:**

![alt text](image-6.png)

- Used to advertise a default route (gateway of last resort) across the network.

**Detailed view of the IGP protocol:**

```CLI
R1#show ip protocols
```

- Suitable for RIP, EIGRP, & OSPF

![alt text](image-7.png)

---

### EIGRP Configuration:

![alt text](image-8.png)

**How Wilcard masks work**

![alt text](image-9.png)

![alt text](image-10.png)

**EIGRP Terminology (Unequal-cost Load-balancing)**
![alt text](image-11.png)
