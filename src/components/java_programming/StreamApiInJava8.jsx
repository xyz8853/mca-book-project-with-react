
export default function StreamApiInJava8(){
    return(
        <div className="stream-api-in-java-8 stream-head">
            <div className="stream-api-body">
                <div className="strem-api-headings">
                    <h5>What is Stream API in Java 8?</h5>
                    <p>A stream in Java 8 is a sequence of data. It helps us in performing various operations with the data. This data can be obtained from several sources such as Collections, Arrays or I/O channels. There are two types of Stream: Sequential and Parallel. We can perform sequential operations when we obtain a stream using the stream() method, and parallel operations with parallelStream() method.
                        Furthermore, in order to support these operations on the data obtained from various collections, the Collection interface has been added with the two new methods stream() and parallelStream() in Java 8. Since interfaces such as List, Set, Deque, and Queue extend the Collection interface, we can get a stream or a parallel stream from the collection classes that implement these interfaces. For example, we can get a stream from an ArrayList object.
                        The most common source of streams is collection objects such as sets, maps, and lists. However, note that we can even use the streams API independent of the collections
                    </p>
                    <h5>What are the Characteristics of Stream API?</h5>
                    <ul>
                        <li><i>1. We can create a stream from a source, perform operations on it and produce the result. The source may be a collection or an array or an I/O resource. The Stream does never modify the source</i></li>
                        <li><i>2. Remember that Streams doesn’t store the data. We can’t add or remove elements from streams. Therefore, we can’t call them the data structures. They do only operations on the data.</i></li>
                        <li><i>3. Stream’s operations are primarily divided into two categories: Intermediate operations & Terminal operations</i></li>
                        <li><i>4. Stream works on a concept of ‘Pipeline of Operations’. A pipeline of operations consists of three things : a source, zero or more intermediate operations and a terminal operation.</i></li>
                        <li><i>5. In order to gain the performance while processing the large amount of data, Stream has a concept of parallel processing without writing any multi threaded code.</i></li>
                        <li><i>6. All elements of a stream are not populated at a time. They are lazily populated as per demand because intermediate operations are not evaluated until terminal operation is invoked</i></li>
                        <li><i>7. All elements of a stream are not populated at a time. They are lazily populated as per demand because intermediate operations are not evaluated until terminal operation is invoked</i></li>
                    </ul>
                    <h5>What are the major operations supported by Stream API?</h5>
                    <p>The Stream API in Java 8 primarily categorizes two types of operations: Intermediate Operations and Terminal Operations</p>
                    <h6><b><i>Intermediate Operations</i></b></h6>
                    <p>When an operation on a stream further produces another stream as a result, we call it an intermediate operation. As intermediate operations return another stream as a result, they can be chained together to form a pipeline of operations. As the word ‘intermediate’ suggest, these operations doesn’t give end result. They just convert one stream to another stream. For example: map(), filter(), distinct(), sorted(), limit(), skip()</p>
                    <h6><b><i>Terminal Operations</i></b></h6>
                    <p>The operations which return non-stream values such as primitive or object are called terminal operations. Furthermore, unlike terminal operations, we can’t chain them together. They produce the end result. Once a terminal operation completes, the Stream is no longer valid. Hence, we can’t use that stream again. For example : forEach(), toArray(), reduce(), collect(), min(), max(), count(), anyMatch(), allMatch(), noneMatch(), findFirst(), findAny()</p>
                    <h6><b><i>Note:-</i></b></h6>
                    <p><i> Stream processing consists of a series of zero or more intermediate operations followed by a terminal operation. Each intermediate operation returns a new stream. The terminal operation returns something other than a stream.</i></p>
                    <h5>What is Stream Pipeline?</h5>
                    <p>Stream API in Java 8 works with a concept of Stream Pipeline. There are three parts to a Stream Pipeline.</p>
                    <p><b>Intermediate Operations:-</b>Transforms the stream into another one. There can be as few or as many intermediate operations as you’d like. Since streams use lazy evaluation, the intermediate operations do not run until the terminal operation runs.</p>
                    <p><b>Terminal Operations:-</b>Actually produces a result. Since streams can be used only once, the stream is no longer valid after a terminal operation completes.</p>
                    <br />
                    <p>Pipeline of operations may contain any number of intermediate operations, but there has to be only one terminal operation, that too at the end of pipeline. Moreover, Intermediate operations are lazily loaded. When you call intermediate operations, they are actually not executed. They are just stored in the memory and executed when the terminal operation is called on the stream.</p>
                </div>
            </div>
        </div>
    )
}