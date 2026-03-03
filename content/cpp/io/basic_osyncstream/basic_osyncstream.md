---
title: "std::basic_osyncstream<CharT,Traits,Allocator>::basic_osyncstream"
source_path: "cpp/io/basic_osyncstream/basic_osyncstream"
category: "io"
since: "C++20"
---

Constructs new synchronized output stream.

## Declarations
```cpp
basic_osyncstream( streambuf_type* buf, const Allocator& a );
```

```cpp
explicit basic_osyncstream( streambuf_type* buf );
```

```cpp
basic_osyncstream( std::basic_ostream<CharT, Traits>& os, const Allocator& a );
```

```cpp
explicit basic_osyncstream( std::basic_ostream<CharT, Traits>& os );
```

```cpp
basic_osyncstream( std::basic_osyncstream&& other ) noexcept;
```

## Parameters
- `buf`: pointer to the std::basic_streambuf that will be wrapped
- `os`: reference to a std::basic_ostream, whose rdbuf() will be wrapped
- `a`: the allocator to pass to the constructor of the member std::basic_syncbuf
- `other`: another osyncstream to move from

## Example
```cpp
#include <iostream>
#include <string_view>
#include <syncstream>
#include <thread>
 
void worker(const int id, std::ostream &os)
{
    std::string_view block;
    switch (id)
    {
        default: [[fallthrough]];
        case 0: block = "██";
                break;
        case 1: block = "▓▓";
                break;
        case 2: block = "▒▒";
                break;
        case 3: block = "░░";
                break;
    }
    for (int i = 1; i <= 50; ++i)
        os << block << std::flush;
    os << std::endl;
}
 
int main()
{
    std::cout << "Synchronized output should not cause any interference:" << std::endl;
    {
        auto scout1 = std::osyncstream{std::cout};
        auto scout2 = std::osyncstream{std::cout};
        auto scout3 = std::osyncstream{std::cout};
        auto scout4 = std::osyncstream{std::cout};
        auto w1 = std::jthread{worker, 0, std::ref(scout1)};
        auto w2 = std::jthread{worker, 1, std::ref(scout2)};
        auto w3 = std::jthread{worker, 2, std::ref(scout3)};
        auto w4 = std::jthread{worker, 3, std::ref(scout4)};
    }
 
    std::cout << "\nLack of synchronization may cause some interference on output:"
              << std::endl;
    {
        auto w1 = std::jthread{worker, 0, std::ref(std::cout)};
        auto w2 = std::jthread{worker, 1, std::ref(std::cout)};
        auto w3 = std::jthread{worker, 2, std::ref(std::cout)};
        auto w4 = std::jthread{worker, 3, std::ref(std::cout)};
    }
}
```

## See also
- [(constructor)](/cpp/io/basic_syncbuf/basic_syncbuf/)
