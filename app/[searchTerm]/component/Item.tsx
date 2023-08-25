import Link from 'next/link'
import Image from 'next/image'
import styles from '../../page.module.css'

type Props = {
    result: Result
}

export default function Item({ result }: Props) {
    const itemTextCol = (
        <div className={styles.results}>
            <div className='result_content'>
                <h4>{result.title}</h4>
                <p>{result.extract}</p>
                <button className={styles.result_btn}>
                    <Link href={`https://en.wikipedia.org/?curid=${result.pageid}`} target="_blank">
                        Read more
                    </Link>
                </button>
            </div>
        </div>
    )

    const content = result?.thumbnail?.source
        ? (
            <div className={styles.results}>
                <Image src={result.thumbnail.source} alt={result.title} width={result.thumbnail.width} height={result.thumbnail.height} />
                <div className='result_content'>
                    <h4>{result.title}</h4>
                    <p>{result.extract}</p>
                    <button className={styles.result_btn}>
                        <Link href={`https://en.wikipedia.org/?curid=${result.pageid}`} target="_blank">
                            Read more
                        </Link>
                    </button>
                </div>
            </div>

        )
        :
        <article className="m-4 max-w-lg">
            {itemTextCol}
        </article>


    return content
}