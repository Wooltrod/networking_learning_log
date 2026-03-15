### Spanning Tree Port states:

![alt text](image.png)

### Spanning Tree Timers:
![alt text](image-1.png)

**Details of Max Age Timer**
![alt text](image-2.png)

### PORTFAST (Optional Spanning Tree Feature):
```CLI
SW1(config)#interface g0/2
SW1(config-if)#spanning-tree portfast
```

- Should only be enabled on interfaces connected to end hosts (e.g PCs). This is because it speeds up the startup time of interfaces, bypassing both the Listening and Learning states.
- Portfast should NOT be enabled on interfaces connecting two switches, because it causes them to skip the Listening and Learning states, which a crucial timers STP uses to evaluate STP and avoid loops.