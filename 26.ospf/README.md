### Basic OSPF Configuration:

| ![](image.png) |
|-|

| ![](image-1.png) |
|-|

**The passive-interface command**


| ![alt text](image-2.png) |
|-|

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

