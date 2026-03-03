---
title: "stdin, stdout, stderr"
source_path: "cpp/io/c/std_streams"
header: "<cstdio>"
category: "io"
since: "C++11"
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

These macros may be expanded to modifiable lvalues. If any of these [std::FILE](/cpp/io/c/file/)* lvalue is modified, subsequent operations on the corresponding stream result in unspecified or undefined behavior.

## Example
```cpp
#include <concepts>
#include <cstdio>
#include <type_traits>
 
template<typename T>
concept IsPrintable = std::integral<T> or std::floating_point<T> or std::is_pointer_v<T>;
 
int my_printf(char const* const format, IsPrintable auto const ... arguments)
{
    return std::fprintf(stdout, format, arguments...);
}
 
int main(int argv, char*[])
{
    my_printf("Strings and chars:\t%s %c\n", "hello", 'x');
    my_printf("Rounding:\t\t%f %.0f %.32f\n", 1.5, 1.5, 1.3);
    my_printf("Padding:\t\t%05.2f %.2f %5.2f\n", 1.5, 1.5, 1.5);
    my_printf("Scientific:\t\t%E %e\n", 1.5, 1.5);
    my_printf("Hexadecimal:\t\t%a %A 0x%X\n", 1.5, 1.5, &argv);
}
```

## See also
- [cinwcin](/cpp/io/cin/)
- [coutwcout](/cpp/io/cout/)
- [cerrwcerr](/cpp/io/cerr/)
- [clogwclog](/cpp/io/clog/)
- [printffprintfsprintfsnprintf](/cpp/io/c/printf/)
- [FILE](/cpp/io/c/file/)
- [C documentation](/c/io/std_streams/)
