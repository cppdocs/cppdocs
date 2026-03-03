---
title: "std::promise<R>::set_value"
source_path: "cpp/thread/promise/set_value"
category: "thread"
since: "C++11"
---

1-3) Atomically stores value into the shared state and makes the state ready.

## Declarations
```cpp
Main template
```

```cpp
void set_value( const R& value );
```
_(since C++11)_

```cpp
void set_value( R&& value );
```
_(since C++11)_

```cpp
std::promise<R&> specializations
```

```cpp
void set_value( R& value );
```
_(since C++11)_

```cpp
std::promise<void> specialization
```

```cpp
void set_value();
```
_(since C++11)_

## Parameters
- `value`: value to store in the shared state

## Return value
(none)

## Example
```cpp
#include <algorithm>
#include <cctype>
#include <chrono>
#include <future>
#include <iostream>
#include <iterator>
#include <sstream>
#include <thread>
#include <vector>
 
using namespace std::chrono_literals;
 
int main()
{
    std::istringstream iss_numbers{"3 4 1 42 23 -23 93 2 -289 93"};
    std::istringstream iss_letters{" a 23 b,e a2 k k?a;si,ksa c"};
 
    std::vector<int> numbers;
    std::vector<char> letters;
    std::promise<void> numbers_promise, letters_promise;
 
    auto numbers_ready = numbers_promise.get_future();
    auto letter_ready = letters_promise.get_future();
 
    std::thread value_reader([&]
    {
        // I/O operations
        std::copy(std::istream_iterator<int>{iss_numbers},
                  std::istream_iterator<int>{},
                  std::back_inserter(numbers));
 
        // notify for numbers
        numbers_promise.set_value();
 
        std::copy_if(std::istreambuf_iterator<char>{iss_letters},
                     std::istreambuf_iterator<char>{},
                     std::back_inserter(letters),
                     ::isalpha);
 
        // notify for letters
        letters_promise.set_value();
    });
 
 
    numbers_ready.wait();
 
    std::sort(numbers.begin(), numbers.end());
 
    if (letter_ready.wait_for(1s) == std::future_status::timeout)
    {
        // output the numbers while letters are being obtained
        for (int num : numbers)
            std::cout << num << ' ';
        numbers.clear(); // numbers were already printed
    }
 
    letter_ready.wait();
    std::sort(letters.begin(), letters.end());
 
    // does nothing if numbers were already printed
    for (int num : numbers)
        std::cout << num << ' ';
    std::cout << '\n';
 
    for (char let : letters)
        std::cout << let << ' ';
    std::cout << '\n';
 
    value_reader.join();
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2098 | C++11 | overloads (1,2) could only throw theexceptions thrown by the copy/moveconstructor of R respectively | they can throw the exceptions thrownby the actual constructor selectedto copy/move an object of type R |

## See also
- [set_value_at_thread_exit](/cpp/thread/promise/set_value_at_thread_exit/)
- [set_exception](/cpp/thread/promise/set_exception/)
