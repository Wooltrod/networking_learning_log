### Manual Time Configuration:

```CLI
Router#clock set <hh:mm:ss> <1-31> <MONTH> <YEAR>

Router#show clock detail
```

**Hardware Clock Configuration**

```CLI
Router#calendar set <hh:mm:ss> <1-31> <MONTH> <YEAR>

## TO SYNC THE HARDWARE CLOCK WITH THE SOFTWARE CLOCK ##

Router#clock update-calendar

## TO SYNC THE SOFTWARE CLOCK WITH THE HARDWARE CLOCK ##

Router#clock read-calendar
```

**Time Zone Configuration**

```CLI
Router(config)#clock timezone <timezone_name> <hr_offset_from_UTC> <minute_offset_from_UTC>

Router#show clock
```

**Daylight Saving Time Configuration**

![alt text](image.png)


### NTP Hierarchy

![alt text](image-1.png)

### NTP Configuration

![alt text](image-2.png)

![alt text](image-3.png)

### Configuring NTP on a Router Interface

![alt text](image-4.png)


### Configuring a network device as an NTP server, even if it's not synced with a real NTP server

![alt text](image-5.png)

### Configuring NTP Symmetric Active Mode

![alt text](image-6.png)

### Configuring NTP Authentication

![alt text](image-7.png)

