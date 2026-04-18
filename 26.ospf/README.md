### Basic OSPF Configuration:

<kbd align="center" style="border: 1px solid #3d3c3c;">
  <img src="image.png" alt="">
</kbd>
<br>
<kbd align="center" style="border: 1px solid #3d3c3c;">
  <img src="image-1.png" alt="">
</kbd>

**The passive-interface command**

![alt text](image-2.png)

**Advertising a default route into OSPF**

```CLI
R1(config-router)#default-information originate
```

#### Router ID:

| ![alt text](image-3.png) |
|-|

```CLI
R1(config-router)#router-id 1.1.1.1 
```

