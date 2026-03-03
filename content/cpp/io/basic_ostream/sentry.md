---
title: "std::basic_ostream<CharT,Traits>::sentry"
source_path: "cpp/io/basic_ostream/sentry"
category: "io"
---

An object of class basic_ostream::sentry is constructed in local scope at the beginning of each member function of [std::basic_ostream](/cpp/io/basic_ostream/) that performs output (both formatted and unformatted). Its constructor prepares the output stream: checks if the stream is already in a failed state, flushes the tie()'d output streams, and performs other implementation-defined tasks if necessary. Implementation-defined cleanup, as well as flushing of the output stream if necessary, is performed in the destructor, so that it is guaranteed to happen if exceptions are thrown during output.

## Declarations
```cpp
class sentry;
```

## Parameters
- `os`: output stream to prepare

## Return value
true if the preparation of the output stream was successful, false otherwise.

## Example
```cpp
#include <iostream>
#include <sstream>
 
struct Foo
{
    char n[6];
};
 
std::ostream& operator<<(std::ostream& os, Foo& f)
{
    std::ostream::sentry s(os);
    if (s)
        os.write(f.n, 5);
    return os;
}
 
int main()
{
    Foo f = {"abcde"};
    std::cout << f << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 397 | C++98 | the destructor might call os.flush(), which may throw exceptions | the exception is not propagated |
| LWG 442 | C++98 | operator bool was not declared const (it is const in the synopsis) | added const |
| LWG 835 | C++98 | if os sets unitbuf, the destructor would call os.flush(), whichis an UnformattedOutputFunction and creates another sentry object(whose destructor then creates another sentry object and so on) | callsos.rdbuf()->pubsync()in this case instead |

## See also
- [operator<<](/cpp/io/basic_ostream/operator_ltlt/)
