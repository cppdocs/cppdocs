---
title: "std::basic_streambuf<CharT,Traits>::pbump"
source_path: "cpp/io/basic_streambuf/pbump"
category: "io"
---

Repositions the put pointer ([pptr()](/cpp/io/basic_streambuf/pptr/)) by count characters, where count may be positive or negative. No checks are done for moving the pointer outside the put area [pbase(),epptr()).

## Declarations
```cpp
protected:
void pbump( int count );
```

## Parameters
- `count`: number to add to the put pointer

## Return value
(none)

## Notes
Because this function takes an int, it cannot manipulate buffers larger than [std::numeric_limits](/cpp/types/numeric_limits/)<int>::max() characters ([LWG issue 255](https://cplusplus.github.io/LWG/issue255)).

## Example
```cpp
#include <fstream>
#include <iostream>
#include <string>
 
struct showput_streambuf : std::filebuf
{
    using std::filebuf::pbump; // expose protected
    std::string showput() const
    {
        return std::string(pbase(), pptr());
    }
};
 
int main()
{
    showput_streambuf mybuf;
    mybuf.open("test.txt", std::ios_base::out);
    std::ostream str(&mybuf);
    str << "This is a test" << std::flush << "1234";
    std::cout << "The put area contains: " << mybuf.showput() << '\n';
    mybuf.pbump(10);
    std::cout << "after pbump(10), it contains " << mybuf.showput() << '\n';
}
```

## See also
- [gbump](/cpp/io/basic_streambuf/gbump/)
