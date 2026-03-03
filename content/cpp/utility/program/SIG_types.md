---
title: "SIGTERM, SIGSEGV, SIGINT, SIGILL, SIGABRT, SIGFPE"
source_path: "cpp/utility/program/SIG_types"
header: "<csignal>"
category: "utility"
---

Each of the above macro constants expands to an integer constant expression with distinct values, which represent different signals sent to the program.

## Declarations
```cpp
#define SIGTERM /*implementation defined*/
```

```cpp
#define SIGSEGV /*implementation defined*/
```

```cpp
#define SIGINT /*implementation defined*/
```

```cpp
#define SIGILL /*implementation defined*/
```

```cpp
#define SIGABRT /*implementation defined*/
```

```cpp
#define SIGFPE /*implementation defined*/
```

## Notes
Additional signal names [are specified by POSIX](https://pubs.opengroup.org/onlinepubs/9699919799/basedefs/signal.h.html).

## See also
- [signal](/cpp/utility/program/signal/)
- [raise](/cpp/utility/program/raise/)
- [C documentation](/c/program/SIG_types/)
