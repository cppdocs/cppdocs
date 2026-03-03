---
title: "stdin, stdout, stderr"
source_path: "c/io/std_streams"
header: "<stdio.h>"
category: "c"
---

Three text streams are predefined. These streams are implicitly opened and unoriented at program startup.

## Declarations
```cpp
#define stdin /* implementation-defined */
```

```cpp
#define stdout /* implementation-defined */
```

```cpp
#define stderr /* implementation-defined */
```

## Notes
Although not mandated by POSIX, the UNIX convention is that stdin and stdout are line-buffered if associated with a terminal and stderr is unbuffered.

These macros may be expanded to modifiable lvalues. If any of these [FILE](/c/io/FILE/)* lvalue is modified, subsequent operations on the corresponding stream result in unspecified or undefined behavior.

## Example
```cpp
#include <stdarg.h>
#include <stdio.h>
 
int my_printf(const char* restrict fmt, ...)
{
    va_list vl;
    va_start(vl, fmt);
    int ret = vfprintf(stdout, fmt, vl);
    va_end(vl);
    return ret;
}
 
int main(void)
{
    my_printf("Rounding:\t%f %.0f %.32f\n", 1.5, 1.5, 1.3);
    my_printf("Padding:\t%05.2f %.2f %5.2f\n", 1.5, 1.5, 1.5);
    my_printf("Scientific:\t%E %e\n", 1.5, 1.5);
    my_printf("Hexadecimal:\t%a %A\n", 1.5, 1.5);
}
```

## See also
- [FILE](/c/io/FILE/)
- [C++ documentation](/cpp/io/c/std_streams/)
