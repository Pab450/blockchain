import crypto from "crypto-js";

/**
 * 
 */
export default class Block
{
    /**
     * 
     */
    private timestamp: number;

    /**
     * 
     */
    private lastHash: string;

    /**
     * 
     */
    private hash: string;

    /**
     * 
     */
    private data: any; 

    /**
     * 
     */
	private nonce: number;

    /**
     *
     */
	private difficulty: number;

    /**
     * 
     * @param lastHash 
     */
    constructor(lastHash: string, data: any, nonce: number, difficulty: number)
    {
        this.timestamp = Date.now();

        this.lastHash = lastHash;
        this.data = data;
        this.nonce = nonce;
        this.difficulty = difficulty;

        this.hash = crypto.SHA256(JSON.stringify(this.toString())).toString();
    }

    /**
     * 
     * @returns 
     */
    public getHash() : string
    {
        return this.hash;
    }

    /**
     * 
     * @returns 
     */
    private toString() : string
    {
        return this.timestamp + this.lastHash + this.data + this.nonce + this.difficulty;
    }

    /**
     * 
     * @returns 
     */
    public static getGenesis() : Block
    {
        return new Block('', '', 0, 0);
    }
}