/**
 * BLOCK: ksas-callouts
 *
 * Registering a callout block with Gutenberg.
 * Renders and saves the editable content within a .callout <div>.
 */

//  Import CSS.
import './editor.scss';
import './style.scss';

const { __ } = wp.i18n; // Import __() from wp.i18n
import { registerBlockType } from '@wordpress/blocks';
import { RichText } from '@wordpress/block-editor';
/**
 * Register: KSAS Callout Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType( 'ksas-callouts/ksas-callout-block', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'KSAS Callout' ), // Block title.
	icon: 'megaphone', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	attributes: {
        content: {
        	default: [],
            type: 'array',
            source: 'children',
            selector: 'p',
        },
    },
    example: {
        attributes: {
            content: 'Hello World',
        },
    },
	styles: [
		{
		    name: 'default',
		    label: __( 'White (default)'),
		    isDefault: true
		},
		{
		    name: 'grey',
		    label: __( 'Grey' )
		},		
		{
		    name: 'heritage',
		    label: __( 'Heritage Blue' )
		},
		{
		    name: 'spirit',
		    label: __( 'Spirit Blue' )
		},	
		{
		    name: 'alert',
		    label: __( 'Alert' )
		}		
	],

	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Component.
	 */
	edit( { className, attributes, setAttributes } ) {
		// Creates a <div class='wp-block-ksas-callouts-ksas-callout-block'></div>.
		return (
			<div className={ 'callout' }>
	           <RichText
	                tagName="p"
	                className={ className }
	                onChange={ ( content ) => setAttributes( { content } ) }
	                value={ attributes.content }
	                allowedFormats={ [ 'core/link' ] } 
	                placeholder={__('Enter callout text...')}
	            />
			</div>
		);
	},

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 *
	 * The "save" property must be specified and must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Frontend HTML.
	 */
	save( { attributes } ) {
		return (
			<div className={ 'callout' }>
	 			<RichText.Content tagName="p" value={ attributes.content } />
			</div>
		);
	},
} );
